import { Analytics } from '@vercel/analytics/react'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const AnalyticsWrapper = () => {
  return <>{siteMetadata.analytics.isVercelAnalyticsActive && <Analytics />}</>
}

export default AnalyticsWrapper
