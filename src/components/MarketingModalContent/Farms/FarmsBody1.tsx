import React from 'react'
import { useWalletModal, FarmsM1Icon } from '@apeswapfinance/uikit'
import useAuth from 'hooks/useAuth'
import ModalContent from '../MarketingModalContent'
import { StyledText, MiniHeaderText, MainHeaderText, MiniButton } from '../styles'

const FarmsBody1: React.FC = () => {
  const { login, logout } = useAuth()

  const { onPresentConnectModal } = useWalletModal(login, logout)

  const openConnectModal = () => {
    onPresentConnectModal()
  }

  return (
    <ModalContent Icon={<FarmsM1Icon width={240} height={120} />}>
      <div>
        <MiniHeaderText>Step 1</MiniHeaderText>
        <MainHeaderText>Connect Your Wallet</MainHeaderText>
        <StyledText>
          <MiniButton onClick={openConnectModal}>Click here </MiniButton> to connect your wallet to ApeSwap.
        </StyledText>
      </div>
    </ModalContent>
  )
}

export default FarmsBody1
