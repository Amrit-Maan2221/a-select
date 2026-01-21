(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD
        define(["jquery", "popper.js", "bootstrap"], factory);
    } else if (typeof module === "object" && module.exports) {
        // CommonJS
        module.exports = factory(
            require("jquery"),
            require("@popperjs/core"),
            require("bootstrap")
        );
    } else {
        // Browser globals
        factory(jQuery, window.Popper, bootstrap);
    }
})(function ($, Popper, bootstrap) {
    "use strict";
    if (!$) {
        throw new Error("This plugin requires jQuery");
    }
    if (!Popper) {
        throw new Error("This plugin requires Popper.js");
    }
    if (typeof bootstrap === "undefined") {
        console.warn("Bootstrap JS not detected — some features may not work.");
    }
    // Store original val function
    const originalVal = $.fn.val;
    $.fn.val = function (value) {
        if (value === undefined) {
            return originalVal.call(this);
        }
        return this.each(function () {
            const instance = $(this).data("aselect");
            if (instance) {
                instance.selectRow(value, false);
            } else {
                originalVal.call($(this), value);
            }
        });
    };

    /** ------------------------
     *  UTILITIES
     *  ----------------------*/
    function generateUniqueId(prefix = "a-select-") {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return (
            prefix +
            Array.from({ length: 8 }, () =>
                chars.charAt(Math.floor(Math.random() * chars.length))
            ).join("")
        );
    }

    function scrollIntoView($el, $container, animate = true) {
        if (!$el.length) return;
        const elTop = $el.position().top;
        const elHeight = $el.outerHeight() * 3;
        const containerHeight = $container.height();
        const currentScroll = $container.scrollTop();
        let targetScroll = null;

        if (elTop + elHeight > containerHeight + currentScroll) {
            targetScroll = elTop + elHeight - containerHeight;
        } else if (currentScroll > 0 && elTop - elHeight < currentScroll) {
            targetScroll = Math.max(elTop - elHeight, 0);
        }

        if (targetScroll !== null) {
            animate
                ? $container.stop().animate({ scrollTop: targetScroll }, 100)
                : $container.scrollTop(targetScroll);
        }
    }

    function convertCamelNotationToSentence(str) {
        if (!str) return "";
        const trimmed = str.replace(/^[a-z]+/, ""); // Remove the first word (everything before the first uppercase letter)
        const sentence = trimmed.replace(/([A-Z])/g, " $1").trim(); // Insert space before each uppercase letter
        return sentence;
    }

    function showTooltip($el, text) {
        if ($el && $el.length) {
            hideTooltip($el);

            $el
                .attr("data-bs-toggle", "tooltip")
                .attr("title", text)
                .tooltip("dispose") // Dispose any existing tooltip
                .tooltip({
                    placement: "bottom",
                    trigger: "hover", // Show on hover
                });
        } else {
            console.warn("Element does not exist in DOM", $el);
        }
    }

    function hideTooltip($el) {
        if ($el && $el.length) {
            $el.tooltip("dispose");
            $el.removeAttr("data-bs-toggle").removeAttr("title");
        } else {
            console.warn("Element does not exist in DOM", $el);
        }
    }

    function getScrollableParents($ctx) {
        return $ctx.parents().filter(function () {
            return (
                $(this).css("overflow") === "auto" ||
                $(this).css("overflow-y") === "scroll" ||
                $(this).css("overflow-x") === "scroll"
            );
        });
    }

    /** ------------------------
     *  CONFIGURATION
     *  ----------------------*/



    const dataAttrs = {
        instance: "aselect",
        quickLinks: "data-quicklink",
        showClearButton: "data-show-clear-button",
        headers: "data-headers",
        ajaxUrl: "data-url",
        uniqueBy: "data-unique-by",
        creatable: "data-creatable",
        dependsOn: "data-depends-on",
        hideExcluded: "data-hide-excluded",
        multiple: "multiple"
    }

    $.fn.aSelect = function (options) {
        if (typeof options === 'string') {
            const method = options;
            return this.each(function () {
                const instance = $(this).data(dataAttrs.instance);
                if (instance && typeof instance[method] === 'function') {
                    instance[method]();
                }
            });
        }

        const defaultOptions = $.fn.aSelect.defaults || {};
        const settings = $.extend(
            {
                onOpen: null,
                uniqueBy: [],
                onClose: null,
                onChange: null,
                showClearButton: false,
                quickLinks: "",
                dependsOn: [],
                ajaxUrl: null,
                headers: [],
                creatable: false,
                hideExcluded: true,
                placeHolder: "-- Select --",
                getAjaxDefaultPayload: () => ({}),
                id: generateUniqueId(),
            },
            defaultOptions,
            options
        );
        return this.each(function () {
            const $select = $(this);
            if (!$select.data(dataAttrs.instance)) {
                if ($select.attr(dataAttrs.quickLinks)) {
                    settings.quickLinks = $($select.attr(dataAttrs.quickLinks)).prop("outerHTML");
                }
                if ($select.attr(dataAttrs.showClearButton)) {
                    settings.showClearButton = $select.attr(dataAttrs.showClearButton) == "true";
                }

                if ($select.attr(dataAttrs.headers)) {
                    settings.headers = $select.attr(dataAttrs.headers).split(",").map(h => h.trim());
                }

                if ($select.attr(dataAttrs.ajaxUrl)) {
                    settings.ajaxUrl = $select.attr(dataAttrs.ajaxUrl);
                }

                if ($select.attr(dataAttrs.uniqueBy)) {
                    settings.uniqueBy = $select.attr(dataAttrs.uniqueBy).split(",").map(h => h.trim());
                }

                if ($select.attr(dataAttrs.creatable)) {
                    settings.creatable = $select.attr(dataAttrs.creatable) == "true";
                }

                if ($select.attr(dataAttrs.hideExcluded)) {
                    settings.hideExcluded = $select.attr(dataAttrs.hideExcluded) == "true";
                }

                if ($select.attr(dataAttrs.multiple)) {
                    settings.multiple = $select.prop(dataAttrs.multiple);
                }

                let dependOnAttr = $select.attr(dataAttrs.dependsOn);
                if (dependOnAttr) {
                    settings.dependsOn = JSON.parse(dependOnAttr);
                }

                const $placeHolderItem = $select.find(`option[value="${$select.val()}"]`);
                if ($placeHolderItem.length) {
                    settings.placeHolder = $placeHolderItem.text() || settings.placeHolder;
                }

                $select.data(dataAttrs.instance, new ASelect($select, settings));
            }
        });
    };


    /** ------------------------
     *  Main Class
     *  ----------------------*/
    class ASelect {
        constructor($select, options) {
            this.$select = $select;
            this.options = options;
            this.isServerSide = !!options.ajaxUrl;
            this.pageSize = 20;
            this.currentPage = 0;
            this.hasMorePages = true;
            this.isLoading = false;
            this.initComplete = false;
            this.uniqueSelectors = options.uniqueBy || [];
            this.isMultiple = options.multiple;
            this.init();
        }

        init() {
            this.buildBaseStructure();
            this.initializePopper();
            if (this.$select.is(":disabled") || this.$select.is("[readonly]")) {
                this.disableSelect();
            }
            this.setupMutationObservers();
            if (this.isServerSide) {
                this.initializeServerSide();
            } else {
                this.initializeClientSide();
            }
        }


        buildBaseStructure() {
            this.$wrapper = $(`<div class="a-select-wrapper" data-aselect-id="${this.options.id}""></div>`);
            this.$wrapper.data('select', this.$select);
            this.$display = $(`<div class="a-select-display" tabindex="0"></div>`).text(this.options.placeHolder);
            if (!this.isMultiple) {
                this.$display.css('min-height', `${this.$select.outerHeight()}px`);
            }
            this.$display.addClass(this.$select.attr("class") || "");
            this.updateDisplayContent();
            if (this.isServerSide) {
                showTooltip(this.$display, "Loading...");
            }

            this.$dropdown = $(
                `<div class="a-select-dropdown card shadow-lg" data-aselect-id="${this.options.id}" style="display: none; z-index: 9999;"></div>`
            );
            this.$filterConatiner = $(
                '<div class="a-select-filter-container px-1 p-2"></div>'
            );
            this.$search = $(
                '<input type="text" class="form-control form-control-sm" placeholder="Search..."/>'
            );
            this.$tableContainer = $(
                `<div class="a-select-table-container overflow-y-auto" style="max-height: 400px;"></div>`
            );
            this.$table = $(
                `<table class="table table-sm a-select-table mb-0" style="margin-bottom: 0;"></table>`
            );
            this.$tableHead = $(
                `<thead class="bg-light position-sticky" style="z-index: 1;top:-1px"></thead>`
            );
            this.$tableHeadRow = $(`<tr></tr>`);
            this.$tableBody = $(`<tbody></tbody>`);

            this.$filterConatiner.append(this.$search).append(this.options.quickLinks);
            this.$tableHead.append(this.$tableHeadRow);
            this.$table.append(this.$tableHead).append(this.$tableBody);
            this.$tableContainer.append(this.$table);
            this.$dropdown.append(this.$filterConatiner).append(this.$tableContainer);
            this.$wrapper.append(this.$display).append(this.$dropdown);

            if (this.options.showClearButton) {
                this.$clearButton = $(
                    '<button type="button" class="a-select-clear-button btn btn-sm position-absolute" tabindex="-1" aria-label="Clear selection"><i class="bi bi-x"></i></button>'
                );
                this.$wrapper.append(this.$clearButton);
            }

            this.$select.addClass("a-select-hidden").attr("data-aselect-id", this.options.id);
            this.$select.after(this.$wrapper);
        }

        initializeClientSide() {
            let hasTableData = false;
            if (this.options.headers.length) {
                for (const key of this.options.headers) {
                    const label = convertCamelNotationToSentence(key);
                    this.$tableHeadRow.append(`<th>${label}</th>`);
                }
                hasTableData = true;
            }
            const self = this;
            this.$select.find("option").each(function () {
                const $opt = $(this);
                if (!$opt.val()) return;

                const $row = $('<tr role="option"></tr>').attr("data-select-id", $opt.val());

                if (hasTableData) {
                    // Add data attribute columns
                    self.options.headers.forEach((h) => {
                        const value = $opt.data(`${h.toLowerCase()}`) || "";
                        $row.append(`<td>${value}</td>`);
                    });
                } else {
                    $row.append(`<td>${$opt.text()}</td>`);
                }

                self.$tableBody.append($row);
            });
            this.finalizeInitialization();
        }


        initializeServerSide() {
            this.appendPlaceholderOption();
            this.checkDependentFields();
            this.bindDependentFields();
            this.buildTableSchema().then(() => {
                this.finalizeInitialization();
            });
        }


        bindDependentFields() {
            const self = this;
            this.options.dependsOn.forEach((dep) => {
                const $depField = $(dep.selector);
                if ($depField.length) {
                    $depField.on("change.aSelect", function () {
                        console.log("Dependent val changed:", $depField.val())
                        self.reload = true;
                        self.selectRow("");
                        self.checkDependentFields();
                    });
                }
            });
        }

        appendPlaceholderOption() {
            const $opt = $('<option>').val('')
                .text(this.options.placeHolder)
                .attr('data-a', '1');
            this.$select.append($opt);
        }

        finalizeInitialization() {
            const initialVal = this.$select.val();
            if (initialVal) {
                this.selectRow(initialVal, false);
            }

            if (this.isServerSide) {
                hideTooltip(this.$display);
            }
            this.bindEvents();
            this.updateClearButtonVisibility()
            this.initComplete = true;
        }

        waitForInit(callback) {
            const checkInit = setInterval(() => {
                if (this.initComplete) {
                    clearInterval(checkInit);
                    callback();
                }
            }, 50);
        }

        bindEvents() {
            this.updateEventsOnDisplay();
            this.setupSearchEvent();
            this.setupTableRowClickEvent();
            this.setupMouseEvents();
            this.setupDropdownKeyboardNavigation();
            if (this.options.showClearButton) {
                this.$clearButton.on("click.aSelect", (e) => {
                    e.stopPropagation();
                    this.selectRow(""); // This will clear selection for both single and multiple
                    if (!this.isMultiple) {
                        this.closeDropdown();
                    }
                });
            }
        }

        setupDropdownKeyboardNavigation() {
            let self = this;
            this.$dropdown.on("keydown.aSelect", function (e) {
                const $rows = self.$tableBody.find("tr:visible").not(".aselect-ignore, .a-select-row-exclude");
                if (self.options.creatable && e.key === "Enter" && $rows.length == 1 && $rows.first().hasClass("a-select-creatable-row")) {
                    e.preventDefault();
                    const searchText = self.$search.val().trim();
                    if (searchText) {
                        self.handleCreatableEntry(searchText);
                    }
                    return;
                }

                let $current = $rows.filter(".table-warning");

                // If no warning, start from primary or first
                if (!$current.length) {
                    $current = $rows.filter(".table-primary").first();
                }
                if (e.key === "ArrowDown") {
                    e.preventDefault();

                    let $next = $rows.first();
                    if ($current.length) {
                        $next = $current.nextAll(":visible").not(".aselect-ignore, .a-select-row-exclude").first();
                    }

                    if ($next.length) {
                        $current.removeClass("table-warning");
                        $next.addClass("table-warning");
                        scrollIntoView($next, self.$tableContainer);
                    }
                } else if (e.key === "ArrowUp") {
                    e.preventDefault();

                    let $prev = $rows.first();
                    if ($current.length) {
                        $prev = $current.prevAll(":visible").not(".aselect-ignore, .a-select-row-exclude").first();
                    }

                    if ($prev.length) {
                        $current.removeClass("table-warning");
                        $prev.addClass("table-warning");
                        scrollIntoView($prev, self.$tableContainer);
                    }
                } else if (e.key === "Enter" || e.key === "Tab") {
                    e.preventDefault();
                    const id = $current.attr("data-select-id");
                    if (id) {
                        self.selectRow(id); // This will remove warning via highlightRow()
                        self.closeDropdown();
                    }
                } else if (e.key === "Escape") {
                    e.preventDefault();
                    self.closeDropdown();
                }
            });
        }

        setupMouseEvents() {
            let self = this;
            this.$tableBody.on("mouseenter.aSelect", "tr:not(.aselect-ignore)", function () {
                self.$tableBody.find("tr").removeClass("table-warning");
                $(this).addClass("table-warning");
            });

            this.$tableBody.on("mouseleave.aSelect", "tr:not(.aselect-ignore)", function () {
                $(this).removeClass("table-warning");
            });
        }

        setupTableRowClickEvent() {
            let self = this;
            this.$tableBody.on("click.aSelect", "tr:not(.aselect-ignore)", function () {
                const $row = $(this);
                if ($row.hasClass("a-select-row-exclude")) {
                    return;
                }

                if (self.options.creatable && $row.hasClass("a-select-creatable-row")) {
                    const searchText = self.$search.val().trim();
                    if (searchText) {
                        self.handleCreatableEntry(searchText);
                    }
                    return;
                }

                const val = $row.attr("data-select-id");

                if (self.isMultiple) {
                    const currentValues = self.$select.val() || [];
                    if (currentValues.includes(val)) {
                        // Deselect if already selected
                        self.deselectValue(val);
                    } else {
                        // Select if not already selected
                        self.selectRow(val);
                    }
                    // Don't close dropdown for multi-select to allow multiple selections
                } else {
                    self.selectRow(val);
                    self.closeDropdown();
                }
            });
        }

        setupSearchEvent() {
            let debounceTimer;
            let self = this;
            this.$search.on("input.aSelect", function () {
                const rawVal = $(this).val().trim()
                const val = rawVal.toLowerCase();

                if (self.isServerSide && self.bitImplementPagination) {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(() => {
                        if (self.loadedValSearchResult != val) {
                            self.loadedValSearchResult = val;
                            self.loadServerData(true).then(() => {
                                self.updateSelectedValueIfNeedOnSearch(self);
                                self.handleCreatableOption(rawVal);
                                self.excludeRows();
                            });
                        }
                    }, 300);
                } else {
                    self.$tableBody.find("tr").each(function () {
                        const $row = $(this);
                        const text = $row.text().toLowerCase();
                        $row.toggle(text.includes(val));
                    });

                    self.updateSelectedValueIfNeedOnSearch(self);
                    self.handleCreatableOption(rawVal);

                }
            });
        }

        handleCreatableOption(rawVal) {
            if (this.options.creatable && rawVal.length > 0) {
                const visibleRows = this.$tableBody.find("tr:visible").not('.a-select-creatable-row, .aselect-ignore');
                if (visibleRows.length === 0) {
                    this.showCreatableOption(rawVal);
                } else {
                    this.hideCreatableOption();
                }
            } else {
                this.hideCreatableOption();
            }
        }


        showCreatableOption(searchText) {
            // Remove existing creatable option if any
            this.hideCreatableOption();

            // Add creatable option row
            const $creatableRow = $(`
                    <tr class="a-select-creatable-row table-success" data-creatable-row="true">
                        <td colspan="${this.$tableHeadRow.find('th').length}">
                            <i class="bi bi-plus me-1"></i>Create new: "${searchText}"
                        </td>
                    </tr>
                `);

            this.$tableBody.prepend($creatableRow);
        }

        hideCreatableOption() {
            this.$tableBody.find('.a-select-creatable-row').remove();
        }


        handleCreatableEntry(value) {
            const newValue = "new:" + value;

            const $newOption = $('<option>')
                .val(newValue)
                .text(value)
                .attr('data-new', 'true');

            this.$select.append($newOption);
            this.selectRow(newValue);
            this.closeDropdown();
            this.$search.val(''); // Clear search
            this.hideCreatableOption();
            this.$select.trigger('newentry', [newValue, value]);
        }

        initializePopper() {
            this.popperInstance = Popper.createPopper(
                this.$display[0],
                this.$dropdown[0],
                {
                    placement: "bottom-start",
                    modifiers: [
                        {
                            name: "computeStyles",
                            options: {
                                gpuAcceleration: false, // true by default
                            },
                        },
                        {
                            name: "preventScroll",
                            enabled: true,
                        },
                    ],
                }
            );
        }

        disableSelect() {
            this.$wrapper.addClass("a-select-disabled");
            this.updateEventsOnDisplay();
        }

        enableSelect() {
            this.$wrapper.removeClass("a-select-disabled");
            this.updateEventsOnDisplay();
        }

        updateEventsOnDisplay() {
            if (this.$wrapper.hasClass("a-select-disabled")) {
                this.$display.off("click.aSelect keydown.aSelect");
                this.$display.attr("tabindex", "-1");
                this.$display.attr("aria-disabled", "true");
            } else {
                // Toggle dropdown on display click
                const self = this;
                this.$display.off("click.aSelect").on("click.aSelect", function (e) {
                    e.stopPropagation();
                    if (self.$dropdown.is(":visible")) {
                        self.closeDropdown();
                    } else {
                        self.openDropdown();
                    }
                });

                // Keyboard navigation
                this.$display.off("keydown.aSelect").on("keydown.aSelect", function (e) {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        self.openDropdown();
                    } else if (e.key === "ArrowDown" && !$dropdown.is(":visible")) {
                        e.preventDefault();
                        self.openDropdown();
                        const $first = self.$tableBody.find("tr:visible").first();
                        if ($first.length) {
                            $first.addClass("table-warning");
                        }
                    }
                });
                this.$display.attr("tabindex", "0");
                this.$display.attr("aria-disabled", "false");
            }
        }

        closeDropdown() {
            this.$dropdown.hide();
            this.$tableBody.find("tr.table-warning").removeClass("table-warning");
            this.$wrapper.removeClass("a-select-open");
            if (!this.$dropdown.parent().is(this.$wrapper)) {
                this.$dropdown.detach().appendTo(this.$wrapper);
            }
            if (this.$scrollableParents) {
                this.$scrollableParents.each(function () {
                    $(this).off("scroll.aSelect");
                });
            }
            $(document).off("mousedown.aSelect focusin.aSelect");
            this.$display.trigger("focus");
        }

        afterDropdownOpenDataLoad() {
            this.excludeRows();
            this.setUpStylesOnDropdownOpen();
        }

        setUpStylesOnDropdownOpen() {
            this.$dropdown.css({
                minWidth: this.$wrapper.outerWidth(),
                maxWidth: "80vw",
                width: "max-content",
            });
        }

        adjustDropdownPosition() {
            let scrollableParent = this.$dropdown.parent();
            while (scrollableParent.length && !scrollableParent.is("body")) {
                const overflowY = scrollableParent.css("overflowY");
                if (overflowY === "auto" || overflowY === "scroll") break;
                scrollableParent = scrollableParent.parent();
            }

            const wrapperOffset = this.$wrapper.offset();
            const scrollableOffset = scrollableParent.offset();
            const wrapperBottom =
                wrapperOffset.top - scrollableOffset.top + this.$wrapper.outerHeight();

            const spaceAbove = wrapperOffset.top - scrollableOffset.top;
            const spaceBelow = scrollableParent.innerHeight() - wrapperBottom;

            let maxHeight = Math.min(416, spaceBelow);

            if (maxHeight < 200 && spaceAbove > 200) {
                this.popperInstance.setOptions({
                    placement: "top-start",
                });
                maxHeight = 200;
            } else {
                this.popperInstance.setOptions({
                    placement: "bottom-start",
                });
            }
            this.$tableContainer.css("max-height", maxHeight - 63 + "px"); // search bar height 47px + 16px gap below
            this.popperInstance.update();
        }

        scrollIntoSelectedRow() {
            const selectedVal = this.$select.val();
            const $selectedRow = this.$tableBody.find(
                `tr[data-select-id="${selectedVal}"]:visible`
            );
            if ($selectedRow.length) {
                scrollIntoView($selectedRow, this.$tableContainer, false);
            }
        }

        openDropdown() {
            if (!this.$dropdown.parent().is("body")) {
                this.$dropdown.detach().appendTo("body");
            }

            this.$dropdown.show();

            if (this.options.ajaxUrl) {
                if (this.reload || !this.initialDataLoaded || (this.loadedValSearchResult != this.$search.val() && this.bitImplementPagination)
                ) {
                    this.loadedValSearchResult = this.$search.val();
                    this.reload = false;
                    this.initialDataLoaded = true;
                    this.loadServerData(true).then(() => {
                        this.afterDropdownOpenDataLoad();
                    });
                } else {
                    this.excludeRows();
                }
            } else {
                this.afterDropdownOpenDataLoad();
            }

            this.$wrapper.addClass("a-select-open");
            this.popperInstance.update();
            this.$search[0].focus({ preventScroll: true });

            setTimeout(() => {
                this.adjustDropdownPosition();
            }, 0);

            this.$scrollableParents = getScrollableParents(this.$select);
            if (this.$scrollableParents) {
                this.$scrollableParents.each(function () {
                    $(this).on("scroll.aSelect", this.closeDropdown);
                });
            }

            this.scrollIntoSelectedRow();

            // Close on outside click
            const self = this;
            $(document).on("mousedown.aSelect focusin.aSelect", function (e) {
                if (!($(e.target).closest(`.a-select-wrapper[data-aselect-id="${self.options.id}"]`).length ||
                    $(e.target).closest(`.a-select-dropdown[data-aselect-id="${self.options.id}"]`).length)) {
                    self.closeDropdown();
                }
            });
        }

        loadServerData(reset = false) {
            return new Promise((resolve, reject) => {
                let headerLength = this.$table.find("thead tr td, thead tr th").length;
                if (reset) {
                    this.currentPage = 0;
                    this.hasMorePages = true;
                    this.$tableBody.empty();
                }

                if (this.isLoading || !this.hasMorePages) {
                    resolve(); // still resolve to keep chain going
                    return;
                }

                this.isLoading = true;
                $.ajax({
                    url: this.options.ajaxUrl,
                    method: "POST",
                    data: {
                        ...this.options.getAjaxDefaultPayload(),
                        start: this.currentPage * this.pageSize,
                        length: this.$filterConatinerpageSize,
                        search: this.bitImplementPagination ? this.$search.val() : "",
                        valColumn: this.valColumn,
                        selectedValue: this.$select.val(),
                        onlyFetchSelectedRow: false,
                        initialLoad: false,
                        headers: this.options.headers,
                        dependsOn: { ...this.getDependentFields() },
                    },
                    success: (response) => {
                        this.isLoading = false;
                        const rows = response.data || [];
                        if (!rows.length) {
                            if (this.$tableBody.find("tr").length == 0) {
                                this.$tableBody.append(
                                    `<tr class="table-danger aselect-ignore"><td colspan="${headerLength || 1
                                    }" class="text-center">No data</td></tr>`
                                );
                            }

                            this.hasMorePages = false;
                            resolve([]);
                            return;
                        }

                        rows.forEach((row) => {
                            this.upsertSelectOption(row);
                            this.appendRowIfDoesNotExist(row);
                        });

                        if (rows.length < this.pageSize) {
                            this.hasMorePages = false;
                        } else {
                            this.currentPage++;
                        }

                        resolve(rows);
                    },
                    error: (xhr, status, error) => {
                        this.isLoading = false;
                        this.$tableBody.append(
                            '<tr class="table-danger aselect-ignore"><td colspan="' +
                            (headerLength || 1) +
                            '">Error loading data</td></tr>'
                        );
                        resolve();
                    },
                });
            });
        }

        upsertSelectOption(row) {
            const value = row[this.valColumn];
            const text = row[this.textColumn];
            let $opt = this.$select.find(`option[value="${value}"]`);
            if ($opt.length === 0) {
                $opt = $("<option>").val(value).text(text).attr("data-a", "1");
                for (const key in row) {
                    $opt.attr(`data-${key.toLowerCase()}`, row[key]);
                }
                this.$select.append($opt);
            } else {
                $opt.text(text);
                for (const key in row) {
                    $opt.attr(`data-${key.toLowerCase()}`, row[key]);
                }
            }
        }

        appendRowIfDoesNotExist(row, appendAtTop = false) {
            let selectedValue = this.$select.val();
            const value = row[this.valColumn];
            if (this.$tableBody.find(`[data-select-id="${value}"]`).length == 0) {
                const $tr = $("<tr>").attr("data-select-id", value);
                for (const key in row) {
                    if (this.skippedColumn.includes(key)) continue;
                    $tr.append(`<td>${row[key]}</td>`);
                }
                if (selectedValue == value) {
                    $tr.addClass("table-primary");
                }
                if (appendAtTop) this.$tableBody.prepend($tr);
                else this.$tableBody.append($tr);
            }
        }

        getDependentFields() {
            const result = {};
            this.options.dependsOn.forEach((dep) => {
                const $depField = $(dep.selector);
                if ($depField.length) {
                    result[dep.param] = $depField.val();
                }
            });
            return result;
        }

        setupMutationObservers() {
            this.observers = [];

            const attributeObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (
                        mutation.type === "attributes" &&
                        mutation.attributeName === "value"
                    ) {
                        const selectedVal = this.$select.attr("value");
                        if (selectedVal !== this.$select.data("last-val")) {
                            this.$select.data("last-val", selectedVal);

                            if (this.initComplete) {
                                this.selectRow(selectedVal);
                            } else {

                                this.waitForInit(() => {
                                    this.selectRow(selectedVal);
                                });
                            }
                        }
                    } else if (
                        mutation.type === "attributes" &&
                        (mutation.attributeName === "disabled" ||
                            mutation.attributeName == "readonly")
                    ) {
                        if (this.$select.is(":disabled") || this.$select.is("[readonly]")) {
                            this.disableSelect();
                        } else {
                            this.enableSelect();
                        }
                    }
                });
            });

            attributeObserver.observe(this.$select[0], {
                attributes: true,
                attributeFilter: ["value", "disabled", "readonly"],
            });
            this.observers.push(attributeObserver);

            // Observe option changes only in client-side mode
            if (!this.isServerSide) {
                const selectOptionsObserver = new MutationObserver((mutations) => {
                    let optionChanged = false;
                    mutations.forEach((mutation) => {
                        if (
                            mutation.type === "childList" &&
                            mutation.addedNodes.length > 0
                        ) {
                            optionChanged = true;
                        }
                    });
                    if (optionChanged) {
                        this.refresh();
                    }
                });

                selectOptionsObserver.observe(this.$select[0], {
                    childList: true,
                    subtree: false, // only direct children (i.e., <option>)
                });

                this.observers.push(selectOptionsObserver);
            }
        }

        highlightRow(val, scrollToView = true) {
            this.$table.find("tbody tr").removeClass("table-primary");
            const $row = this.$table.find(`[data-select-id="${val}"]`);
            if ($row.length) {
                $row.addClass("table-primary");
                if (this.$wrapper.hasClass("a-select-open") && scrollToView) {
                    scrollIntoView($row, this.$tableContainer);
                }
            }
            this.$tableBody.find("tbody tr").removeClass("table-warning");
        }

        showSelectedValue(val, triggerChange) {
            if (this.isMultiple) {
                var currentValues = this.$select.val();
                if (currentValues.includes(val)) {

                } else {
                    currentValues.push(val);
                    originalVal.call(this.$select, currentValues);
                }

            } else {
                originalVal.call(this.$select, val);
            }

            if (triggerChange) {
                this.$select.trigger("change");
            }

            this.updateDisplayContent();
            this.highlightSelectedRows(val);
        }

        highlightSelectedRows(scrollToView = true) {
            this.$table.find("tbody tr").removeClass("table-primary");

            if (this.isMultiple) {
                const selectedValues = this.$select.val() || [];
                selectedValues.forEach(val => {
                    const $row = this.$table.find(`[data-select-id="${val}"]`);
                    if ($row.length) {
                        $row.addClass("table-primary");
                    }
                });
            } else {
                const $row = this.$table.find(`[data-select-id="${this.$select.val()}"]`);
                if ($row.length) {
                    $row.addClass("table-primary");
                    if (this.$wrapper.hasClass("a-select-open") && scrollToView) {
                        scrollIntoView($row, this.$tableContainer);
                    }
                }
            }

            this.$tableBody.find("tbody tr").removeClass("table-warning");
        }


        selectRow(val, triggerChange = true) {
            const $opt = this.$select.find(`option[value="${val}"]`);
            if ($opt.length && (!this.options.ajaxUrl || $opt.attr("data-new"))) {
                this.showSelectedValue(val, triggerChange);
                this.updateClearButtonVisibility();
            } else if (this.options.ajaxUrl) {
                if (!val) {
                    this.showSelectedValue(val, triggerChange);
                    this.updateClearButtonVisibility();
                    return;
                } else {
                    const $selectedRow = this.$tableBody.find(
                        `[data-select-id="${val}"]`
                    );
                    if ($selectedRow.length && $opt.length) {
                        this.showSelectedValue(val, triggerChange);
                        this.updateClearButtonVisibility();
                    } else {
                        if ($opt.length && $opt.text()) {
                            this.$display.text($opt.text());
                            this.updateClearButtonVisibility();
                        }
                        $.ajax({
                            url: this.options.ajaxUrl,
                            type: "POST",
                            data: {
                                start: -1,
                                length: -1,
                                search: "",
                                selectedValue: val,
                                valColumn: this.valColumn,
                                onlyFetchSelectedRow: true,
                                initialLoad: false,
                                headers: this.options.headers,
                                dependsOn: { ...this.getDependentFields() },
                                ...this.options.getAjaxDefaultPayload(),
                            },
                            success: (response) => {
                                const row = response.selectedRow;
                                if (row) {
                                    this.upsertSelectOption(row);
                                    this.appendRowIfDoesNotExist(row, true);
                                    this.showSelectedValue(val, triggerChange);
                                    this.updateClearButtonVisibility();
                                }
                            },
                            error: (xhr, status, error) => {
                                this.$tableBody.append('<tr class="table-danger aselect-ignore"><td colspan="' + (headerLength || 1) +
                                    '">Error loading data</td></tr>');
                            },
                        });
                    }
                }
            }
        }

        updateClearButtonVisibility() {
            if (this.options.showClearButton) {
                const selectedVal = this.$select.val();
                if (this.isMultiple) {
                    const selectedValues = selectedVal || [];
                    if (selectedValues.length > 0) {
                        this.$clearButton.show();
                    } else {
                        this.$clearButton.hide();
                    }
                } else {
                    if (selectedVal) {
                        this.$clearButton.show();
                    } else {
                        this.$clearButton.hide();
                    }
                }
            }
        }



        buildTableSchema() {
            return new Promise((resolve, reject) => {
                let data = {
                    start: 0,
                    length: 0,
                    search: "",
                    initialLoad: true,
                    onlyFetchSelectedRow: false,
                    dependsOn: { ...this.getDependentFields() },
                    ...this.options.getAjaxDefaultPayload(),
                };

                $.ajax({
                    url: this.options.ajaxUrl,
                    type: "POST",
                    data: data,
                    success: (response) => {
                        this.bitImplementPagination = response.bitImplementPagination;
                        this.skippedColumn = (response.vcSkippedColumns || "")
                            .split(",")
                            .map((x) => x.trim())
                            .filter((x) => x);
                        this.textColumn = response.vcTextColumn;
                        this.valColumn = response.vcValColumn;

                        const rows = response.data || [];
                        this.options.headers = Object.keys(rows[0]);
                        const visibleHeaders = this.options.headers.filter(
                            (key) => !this.skippedColumn.includes(key)
                        );
                        if (visibleHeaders.length > 1) {
                            for (const key of visibleHeaders) {
                                const label = convertCamelNotationToSentence(key);
                                this.$tableHeadRow.append(`<th>${label}</th>`);
                            }
                        }

                        if (this.bitImplementPagination) {
                            this.$tableContainer.on("scroll", () => {
                                if (!this.hasMorePages || this.isLoading) return;

                                const scrollTop = this.$tableContainer.scrollTop();
                                const scrollHeight = this.$tableContainer[0].scrollHeight;
                                const containerHeight = this.$tableContainer.innerHeight();

                                // Load more when near bottom
                                if (scrollTop + containerHeight >= scrollHeight - 50) {
                                    this.loadServerData();
                                }
                            });
                        }
                        resolve([]);
                    },
                    error: () => {
                        this.$tableBody.html("<tr><td>Error loading data</td></tr>");
                        resolve([]);
                    },
                });
            });
        }

        checkDependentFields() {
            if (!this.options.dependsOn || this.options.dependsOn.length === 0)
                return true;
            let allValid = true;
            let missingFields = [];

            this.options.dependsOn.forEach((dep) => {
                const $depField = $(dep.selector);
                if ($depField.length && (!$depField.val() || $depField.val() === "")) {
                    allValid = false;
                    let label = $depField.data("label");
                    missingFields.push(label);
                }
            });

            if (allValid) {
                if (this.$wrapper.hasClass("a-select-disabled")) {
                    this.enableSelect();
                }
                hideTooltip(this.$wrapper);
            } else {
                if (!this.$wrapper.hasClass("a-select-disabled")) {
                    this.disableSelect();
                }
                showTooltip(this.$wrapper, `Please select ${missingFields.join(" and ")} first`);
            }

            return allValid;
        }

        updateSelectedValueIfNeedOnSearch(self) {
            if (!self.isMultiple) {
                const selectedVal = this.$select.val();
                const $selectedRow = this.$tableBody.find(
                    `tr[data-select-id="${selectedVal}"]:visible`
                );
                if (!$selectedRow.length) {
                    // Selected row is not visible, select the topmost visible row
                    const $firstVisible = this.$tableBody
                        .find("tr:visible")
                        .not(".aselect-ignore")
                        .first();
                    if ($firstVisible.length) {
                        const newVal = $firstVisible.attr("data-select-id");
                        if (newVal) {
                            this.selectRow(newVal);
                        }
                    }
                }
            }
        }

        getUniqueValuesToExclude() {
            const excludedValues = [];

            this.uniqueSelectors.forEach(selector => {
                $(selector).not(this.$select).each(function () {
                    const value = $(this).val();
                    if (value) {
                        excludedValues.push(value);
                    }
                });
            });

            return excludedValues;
        }

        excludeRows() {
            if (this.uniqueSelectors.length > 0) {
                const excludedValues = this.getUniqueValuesToExclude();

                this.$tableBody.find('tr[data-select-id]').each((index, row) => {
                    const $row = $(row);
                    const rowValue = $row.attr('data-select-id');

                    if (excludedValues.includes(rowValue)) {
                        $row.addClass('a-select-row-exclude');
                        if (this.options.hideExcluded) {
                            $row.addClass('d-none');
                        }
                    } else {
                        $row.removeClass('a-select-row-exclude');
                        if (this.options.hideExcluded) {
                            $row.removeClass('d-none');
                        }
                    }
                });
            }
        }

        deselectValue(value) {
            if (this.isMultiple) {
                const currentValues = this.$select.val() || [];
                const newValues = currentValues.filter(val => val != value);

                originalVal.call(this.$select, newValues);
                this.$select.trigger('change');
                this.updateDisplayContent();
                this.highlightSelectedRows();
                this.updateClearButtonVisibility();
            }
        }


        updateDisplayContent() {
            if (this.isMultiple) {
                const selectedValues = this.$select.val() || [];
                const selectedOptions = this.$select.find('option:selected');

                if (selectedOptions.length === 0) {
                    this.$display.text(this.options.placeHolder);
                    this.$display.removeClass('a-select-multiple-display');
                } else {
                    this.$display.addClass('a-select-multiple-display');

                    // Create chips for selected items
                    const chips = selectedOptions.map((index, option) => {
                        const $option = $(option);
                        return `
                        <span class="a-select-chip">
                            ${$option.text()}
                            <button type="button" class="a-select-chip-remove" data-value="${$option.val()}">
                                <i class="bi bi-x"></i>
                            </button>
                        </span>
                    `;
                    }).get().join('');

                    this.$display.html(chips);

                    // Add click event for chip remove buttons
                    this.$display.find('.a-select-chip-remove').on('click', (e) => {
                        e.stopPropagation();
                        const value = $(e.currentTarget).data('value');
                        this.deselectValue(value);
                    });
                }
            } else {
                const selectedVal = this.$select.val();
                const $selectedOption = this.$select.find(`option[value="${selectedVal}"]`);
                const displayText = $selectedOption.length ? $selectedOption.text() : this.options.placeHolder;
                this.$display.text(displayText);
            }
        }


        cleanUp() {
            this.$wrapper.find('*').off('.aSelect'); // Remove all plugin events
            $(document).off('.aSelect');
            this.$wrapper.tooltip('dispose');
            for (const observer of this.observers) {
                observer.disconnect();
            }
            this.$select.find("option[data-a]").remove();
            this.$select.removeClass('a-select-hidden')
                .css('display', '')
                .removeData(dataAttrs.instance);

            this.$wrapper.remove();
        }


        destroy() {
            this.cleanUp();
        }

        refresh() {
            // Destroy existing instance
            this.cleanUp();
            this.$select.aSelect(this.options);
        }
    }


    window.ASelect = ASelect;
});
