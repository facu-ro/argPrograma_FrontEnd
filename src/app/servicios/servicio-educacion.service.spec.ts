/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioEducacionService } from './servicio-educacion.service';

describe('Service: ServicioEducacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioEducacionService]
    });
  });

  it('should ...', inject([ServicioEducacionService], (service: ServicioEducacionService) => {
    expect(service).toBeTruthy();
  }));
});
