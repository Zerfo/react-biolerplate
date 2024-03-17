import { createRoot } from 'react-dom/client';

import Root from 'containers/Root';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<Root />);
