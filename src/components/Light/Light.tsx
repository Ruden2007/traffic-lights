import {LightProps} from "./light.interface.ts"
import styles from "./Light.module.sass"

export default function Light({isActive, color}: LightProps) {
    return <div className={styles.light} style={{backgroundColor: `${isActive ? color : "#aaa"}`}}></div>
}