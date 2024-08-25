"use client";

import { Button } from './button';
import { signOut } from 'next-auth/react'

const LogoutButton = () => {

    const handleClick = async () => {
        await signOut({
          callbackUrl: "/login",
        });
    }

  return (
    <Button onClick={handleClick}>LogOut</Button>
  )
}

export default LogoutButton
