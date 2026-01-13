import { signIn, signOut, useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'Arial' }}>
        <h1>لوحة تحكم بوت ديسكورد</h1>
        <button onClick={() => signIn('github')} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          تسجيل الدخول عبر GitHub
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>أهلاً، {session.user.name}</h1>
      <p>أنت الآن في لوحة التحكم (هنا ستظهر إعدادات اليوتيوب والحماية)</p>
      <button onClick={() => signOut()}>تسجيل الخروج</button>
    </div>
  );
}
