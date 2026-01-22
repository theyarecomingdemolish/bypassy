import { BareClient } from './bare-client-esm.js';
class WrappedBareClient extends BareClient {
    async init() {
        // No-op to satisfy bare-mux 2.x expectation of an init method
    }
}
export default WrappedBareClient;
