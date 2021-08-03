import locationsReducer, { LocationsState, addLocation } from './locations';
  
  describe('addLocation reducer', () => {
    const initialState: LocationsState = {
      value: ['Zaragoza'],
    };
    it('should handle initial state', () => {
      expect(locationsReducer(undefined, { type: 'unknown' })).toEqual({
        value: ['Zaragoza'],
      });
    });
  
    it('should handle increment', () => {
      const actual = locationsReducer(initialState, addLocation('Barcelona'));
      expect(actual.value).toEqual(['Zaragoza', 'Barcelona']);
    }); 
    
  });
  