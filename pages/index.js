import Link from 'next/link'
import { MainLayout } from '../layouts/mainLayout'

export default function index() {
    return ( 
        <MainLayout title={'Main Page'}>
            <h1>Hello my Dear!</h1>

            <p>lorem lorem lorem lorem lorem </p>
        </MainLayout>)
}