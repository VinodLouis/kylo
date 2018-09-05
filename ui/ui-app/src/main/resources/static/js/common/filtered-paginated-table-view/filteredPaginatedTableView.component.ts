import {AfterViewInit, Component, ContentChildren, Input, QueryList, ViewChild} from "@angular/core";
import {ITdDataTableColumn, ITdDataTableSortChangeEvent, TdDataTableComponent, TdDataTableSortingOrder, TdDataTableTemplateDirective} from "@covalent/core/data-table";
import {IPageChangeEvent} from "@covalent/core/paging";

@Component({
    selector: 'filtered-paginated-table-view',
    templateUrl: 'js/common/filtered-paginated-table-view/filteredPaginatedTableView.html'
})
export class FilteredPaginatedTableViewComponent implements AfterViewInit {

    @ContentChildren(TdDataTableTemplateDirective) templates: QueryList<TdDataTableTemplateDirective>;
    @Input() cardTitle: string = "";
    @Input() onSearchDebounce: any;
    @Input() filteredData: any[];
    @Input() columns: ITdDataTableColumn[];
    @Input() clickable: boolean = true;
    @Input() sortable: boolean = true;
    @Input() sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;
    @Input() sortBy: string = "";
    @Input() onSortChange: any;
    @Input() onRowClick: any;
    @Input() firstLast: boolean = false;
    @Input() pageSize: number = 5;
    @Input() filteredTotal: number = 0;
    @Input() onPageSizeChange: any;
    @Input() allowedPageSize: number[] = [5, 10, 20, 50];
    @ViewChild(TdDataTableComponent) dataTable: TdDataTableComponent;
    @Input() showToolbar: boolean = true;

    pageSizeChange(pagingEvent: IPageChangeEvent): void {
        if(typeof this.onPageSizeChange === 'function' && pagingEvent){
            this.onPageSizeChange(pagingEvent);
        }
    }

    search(searchTerm: string): void {
        this.onSearchDebounce(searchTerm);
    }

    sort(sortEvent: ITdDataTableSortChangeEvent): void {
        if(typeof this.onSortChange === 'function' && sortEvent){
            this.onSortChange(sortEvent);
        }
    }

    rowClicked(clickEvent: any) {
        if(typeof this.onRowClick === 'function' && clickEvent){
            this.onRowClick(clickEvent);
        }
    }

    ngAfterViewInit() {
        // Templates won't be seen by TdDataTable; need to manually link them
        this.dataTable._templates = this.templates;
        this.dataTable.ngAfterContentInit();
    }
}