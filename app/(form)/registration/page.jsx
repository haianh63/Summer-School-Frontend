import Form from '../../_components/form'
import { isRegistrationOpen } from '@/utils/strapi.utils'
import Popup from '@/app/_components/Popup';
export default async function Page() {
    const registrationStatus = await isRegistrationOpen();
    if (registrationStatus) {
        return <Form />
    } else {
        return <Popup />
    }   
}
