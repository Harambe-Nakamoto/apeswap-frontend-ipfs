import React from 'react'
import { ModalProvider } from '@apeswapfinance/uikit'
import { Web3ReactProvider, createWeb3ReactRoot } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import store from 'state'
import NftProvider from 'views/Nft/contexts/NftProvider'
import { NetworkContextName } from 'config/constants'
import { HashRouter } from 'react-router-dom'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

const queryClient = new QueryClient()

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <HashRouter>
            <HelmetProvider>
              <ThemeContextProvider>
                <NftProvider>
                  <RefreshContextProvider>
                    <ModalProvider>
                      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
                    </ModalProvider>
                  </RefreshContextProvider>
                </NftProvider>
              </ThemeContextProvider>
            </HelmetProvider>
          </HashRouter>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  )
}

export default Providers
