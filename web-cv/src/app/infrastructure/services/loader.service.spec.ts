import { LoaderService } from './loader.service';

describe('Loader Service', () => {
  let service: LoaderService;

  beforeEach(() => {
    service = new LoaderService();
  });

  it('creates an instance of a service', () => {
    expect(service).toBeTruthy();
  });

  it('should change loading property to true when setLoading method invoked with "true" as argument', () => {
    service.setLoading(true);
    expect(service.loading).toBeTruthy();
  });
});
