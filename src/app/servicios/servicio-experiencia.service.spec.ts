/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioExperienciaService } from './servicio-experiencia.service';

describe('Service: ServicioExperiencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioExperienciaService]
    });
  });

  it('should ...', inject([ServicioExperienciaService], (service: ServicioExperienciaService) => {
    expect(service).toBeTruthy();
  }));
});
