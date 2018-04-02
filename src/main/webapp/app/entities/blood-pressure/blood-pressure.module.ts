import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TweentyOnePointsSharedModule } from '../../shared';
import { TweentyOnePointsAdminModule } from '../../admin/admin.module';
import {
    BloodPressureService,
    BloodPressurePopupService,
    BloodPressureComponent,
    BloodPressureDetailComponent,
    BloodPressureDialogComponent,
    BloodPressurePopupComponent,
    BloodPressureDeletePopupComponent,
    BloodPressureDeleteDialogComponent,
    bloodPressureRoute,
    bloodPressurePopupRoute,
    BloodPressureResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...bloodPressureRoute,
    ...bloodPressurePopupRoute,
];

@NgModule({
    imports: [
        TweentyOnePointsSharedModule,
        TweentyOnePointsAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        BloodPressureComponent,
        BloodPressureDetailComponent,
        BloodPressureDialogComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeletePopupComponent,
    ],
    entryComponents: [
        BloodPressureComponent,
        BloodPressureDialogComponent,
        BloodPressurePopupComponent,
        BloodPressureDeleteDialogComponent,
        BloodPressureDeletePopupComponent,
    ],
    providers: [
        BloodPressureService,
        BloodPressurePopupService,
        BloodPressureResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TweentyOnePointsBloodPressureModule {}
