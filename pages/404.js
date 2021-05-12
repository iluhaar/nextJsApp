import Link from 'next/link'
import {MainLayout} from '../layouts/mainLayout'
import classes from '../styles/error.module.scss'
export default function ErrorPage() {
    return (
        <MainLayout>
        <h1 className={classes.error}>Error 404</h1>
        <p> Please <Link href={'/'}><a>go back to sefety place</a></Link></p>
        </MainLayout>
    )
}