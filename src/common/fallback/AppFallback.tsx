import Loading from "@common/loading/Loading"
import fallbackStyles from './appfallback.module.scss';

interface AppFallbackProps {
  size?: number
}

const AppFallback = ({ size = 100 }) => {

  return (
    <div className={fallbackStyles.fallback}>
      <Loading size={size}/>
    </div>
  )
}

export default AppFallback;