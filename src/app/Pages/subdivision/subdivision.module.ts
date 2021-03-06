import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SubdivisionRoutingModule } from './subdivision-routing.module';
import { WorksheetComponent } from './worksheet/worksheet.component';
import { MainPageComponent } from './worksheet/main-page/main-page.component';
import { LvPageComponent } from './worksheet/lv-page/lv-page.component';
import { DbPageComponent } from './worksheet/db-page/db-page.component';
import { GisPageComponent } from './worksheet/gis-page/gis-page.component';
import { AttachPageComponent } from './worksheet/attach-page/attach-page.component';
import { WorksheetService } from './worksheet.service';
import { PreviewComponent } from './worksheet/preview/preview.component';
import { EditingComponent } from './worksheet/editing/editing.component';
import { ToolsComponent } from './worksheet/editing/tools/tools.component';
import { TextEditorComponent } from './worksheet/editing/text-editor/text-editor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SubdivisionRoutingModule
  ],
  declarations: [WorksheetComponent, MainPageComponent, LvPageComponent, DbPageComponent, GisPageComponent, AttachPageComponent, PreviewComponent, EditingComponent, ToolsComponent, TextEditorComponent],
  providers: [WorksheetService]
})
export class SubdivisionModule { }
