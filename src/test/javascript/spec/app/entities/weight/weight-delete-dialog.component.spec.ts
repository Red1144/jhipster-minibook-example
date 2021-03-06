/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TweentyOnePointsTestModule } from '../../../test.module';
import { WeightDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/weight/weight-delete-dialog.component';
import { WeightService } from '../../../../../../main/webapp/app/entities/weight/weight.service';

describe('Component Tests', () => {

    describe('Weight Management Delete Component', () => {
        let comp: WeightDeleteDialogComponent;
        let fixture: ComponentFixture<WeightDeleteDialogComponent>;
        let service: WeightService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TweentyOnePointsTestModule],
                declarations: [WeightDeleteDialogComponent],
                providers: [
                    WeightService
                ]
            })
            .overrideTemplate(WeightDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WeightDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(WeightService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
