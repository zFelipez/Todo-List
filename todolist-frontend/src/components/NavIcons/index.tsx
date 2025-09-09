import { Link } from 'react-router-dom';
import styles from './styles.module.css';

type NavIconsProps = {
    iconName:  string,
    linkTo: string,
    title: string

}

export default function NavIcons({iconName, linkTo,title}: NavIconsProps){

return (



    <>
    
      <Link to= {linkTo}> <span title= {title}className={`${styles.icon} material-symbols-outlined`}>{iconName}
</span> </Link>
    
    </>
)


}