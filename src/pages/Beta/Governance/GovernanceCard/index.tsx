import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardTitle, CardButtons, DetailsButton, VoteButton, Title, Number } from './styleds'
import { StyledInternalLink, colors } from 'src/theme'
import { useDarkModeManager } from 'src/state/user/hooks'

export type ProposalStates =
  | 'pending'
  | 'active'
  | 'canceled'
  | 'defeated'
  | 'succeeded'
  | 'queued'
  | 'expired'
  | 'executed'

export interface GovernanceCardProps {
  id: string
  title: string
  to: string
  status: ProposalStates
}

const GovernanceCard = ({ id, title, to, status }: GovernanceCardProps) => {
  const { t } = useTranslation()
  const [isDark] = useDarkModeManager()

  const bgColors = {
    vote: colors(isDark).color11,
    executed: colors(isDark).green2Gradient,
    defeated: colors(isDark).red3Gradient
  }

  const btnColors = {
    vote: colors(isDark).orange1,
    executed: colors(isDark).green2,
    defeated: colors(isDark).red3
  }

  return (
    <Card>
      <CardTitle>
        <Number>{id}.</Number>
        <Title>{title}</Title>
      </CardTitle>
      <CardButtons>
        <StyledInternalLink to={to} style={{ width: '100%', textDecoration: 'none' }}>
          <DetailsButton variant="outline">{t('votePage.details')}</DetailsButton>
        </StyledInternalLink>
        <VoteButton variant="primary" color={(btnColors as any)[status]} backgroundColor={(bgColors as any)[status]}>
          {status}
        </VoteButton>
      </CardButtons>
    </Card>
  )
}
export default GovernanceCard
