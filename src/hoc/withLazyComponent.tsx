import Preloader from '../components/Preloader'
import { Suspense } from 'react'

/**
 *  Wrapper Around Suspense
 * @returns ReactNode
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withLazyComponent = (LazyComponent: any) => () => (
  <Suspense fallback={<Preloader />}>
    <LazyComponent />
  </Suspense>
)

withLazyComponent.displayName = 'withLazyComponent'

export default withLazyComponent
