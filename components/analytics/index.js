import { Analytics } from '@vercel/analytics/react'
import GA from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const AnalyticsWrapper = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.isVercelAnalyticsActive && <Analytics />}
      {isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}
    </>
  )
}

export default AnalyticsWrapper
