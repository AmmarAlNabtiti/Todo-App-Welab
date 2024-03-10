import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='not-found-page'>
            <h2 >هذه الصفحة غير متوفرة في الوقت الحالي</h2>
            <p>يمكنك الرجوع لصفحة الرئيسية ن خلال الراربط في الاسفل</p>
            <Link href="/">صفحة المهام</Link>
        </div>
    );
}