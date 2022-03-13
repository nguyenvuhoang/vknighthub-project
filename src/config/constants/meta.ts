import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'VknightHub',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by VknightHub), NFTs, and more, on a platform you can trust.',
  image: '',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('VknightHub')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('VknightHub')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('VknightHub')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('VknightHub')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('VknightHub')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('VknightHub')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('VknightHub')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('VknightHub')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('VknightHub')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('VknightHub')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('VknightHub')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('VknightHub')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('VknightHub')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('VknightHub')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('VknightHub')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('VknightHub')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('VknightHub')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('VknightHub')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('VknightHub Info & Analytics')}`,
        description: 'View statistics for VknightHub exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('VknightHub Info & Analytics')}`,
        description: 'View statistics for VknightHub exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('VknightHub Info & Analytics')}`,
        description: 'View statistics for VknightHub exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('VknightHub')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('VknightHub')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('VknightHub')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('VknightHub')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('VknightHub')}`,
      }
    default:
      return null
  }
}
