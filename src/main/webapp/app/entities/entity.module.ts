import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TweentyOnePointsPointsModule } from './points/points.module';
import { TweentyOnePointsWeightModule } from './weight/weight.module';
import { TweentyOnePointsBloodPressureModule } from './blood-pressure/blood-pressure.module';
import { TweentyOnePointsPreferencesModule } from './preferences/preferences.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TweentyOnePointsPointsModule,
        TweentyOnePointsWeightModule,
        TweentyOnePointsBloodPressureModule,
        TweentyOnePointsPreferencesModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TweentyOnePointsEntityModule {}
