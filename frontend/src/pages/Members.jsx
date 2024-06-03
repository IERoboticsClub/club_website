import '../styles/Members.css';
import MemberItem from '../components/members/MemberItem';
import { members } from '../data/members';


function Members() {
    return (
        <div className='pt-48 pb-16'>
            <h1 className='pl-standard-1.5 pb-10 text-ie-color-dark'>These our our members</h1>
            <div className='flex flex-wrap justify-center gap-y-10'>
                {
                    members.map((member, index) => (
                        <MemberItem key={index} {...member} />
                    ))
                }
            </div>
        </div>
    )
}

export default Members