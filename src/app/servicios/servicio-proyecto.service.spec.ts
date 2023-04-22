/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioProyectoService } from './servicio-proyecto.service';

describe('Service: ServicioProyecto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioProyectoService]
    });
  });

  it('should ...', inject([ServicioProyectoService], (service: ServicioProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
