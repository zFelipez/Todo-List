import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type NavIconsProps = {
    iconName:  string,
    linkTo: string

}

export default function NavIcons({iconName, linkTo}: NavIconsProps){

return (



    <>
    
      <Link to= {linkTo}> <span className={`${styles.icon} material-symbols-outlined`}>{iconName}
</span> </Link>
    
    </>
)


}