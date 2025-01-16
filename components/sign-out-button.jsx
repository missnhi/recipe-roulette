"use client"
import React from 'react'
import Cookies from 'js-cookie'

export default function SignOutButton() {
  const onSignOut = () => {
    Cookies.remove('email');
    window.location.reload();
    // Optionally, you can redirect the user or perform other actions after sign-out
  }

  return (
    <div>
      <button onClick={onSignOut}>Sign Out</button>
    </div>
  )
}