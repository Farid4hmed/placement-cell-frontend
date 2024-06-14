import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAdminAuth = (WrappedComponent: any) => {
  return (props: any) => {
    console.log(props)
    const router = useRouter();

    useEffect(() => {
      if (!props.isAdmin) {
        router.replace('/');
      }
    }, [props.isAdmin]);

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
