### Add New Device

1. Create a new class for your device
```javascript
import {Device} from "./device";

/**
 * NewDevice
 */
export class NewDevice extends Device {
    //...
}
```

2. Create constructor if needed

3. Implement initializeEvents method (check light.js for an example)

4. Implement getInnerHtml (check light.js for an example)

5. To test your device create an instance of it in src/js/registry/DevicesAPI.mock.js