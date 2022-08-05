import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home } from './components/Home';

import './styles/global.scss';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 3
        },
    },
})

export function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    )
}