'use client'

import Link from 'next/link'
import React from 'react'
import Styles from "./styles.module.css"
import Image from "next/image"
import { usePathname } from 'next/navigation'

const Sidebar = () => {

    const pathname = usePathname()
  return (
    <div className={Styles.wrapper}>
        <p className={Styles.logo}>Jekz</p>
        <p className={Styles.menu_main}>MAIN MENU</p>
        <div className={pathname === "/dashboard" ? Styles.active: Styles.row_wrapper}>
            <Image src='../gameboy.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard"><p className={Styles.row_text}>Dashboard</p></Link>
        </div>
        
        <div className={pathname === "/dashboard/games" ? Styles.active: Styles.row_wrapper}>
            <Image src='../gameboy.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard/games"><p className={Styles.row_text}>Games</p></Link>
        </div>
        <div className={pathname === "/dashboard/customers" ? Styles.active: Styles.row_wrapper}>
            <Image src='../people.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard/customers"><p className={Styles.row_text}>Customers</p></Link>
        </div>
        <div className={pathname === "/dashboard/leaderboard" ? Styles.active: Styles.row_wrapper}>
            <Image src='../cup.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard/leaderboard"><p className={Styles.row_text}>LeaderBoard</p></Link>
        </div>
        <div className={pathname === "/dashboard/transactions" ? Styles.active: Styles.row_wrapper}>
            <Image src='../convert-card.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard/transactions"><p className={Styles.row_text}>Transaction</p></Link>
        </div>
        <p className={Styles.team}>TEAM</p>
        <div className={pathname === "/dashboard/members" ? Styles.member_active: Styles.member}>
            <Image src='../member.svg' alt='gameboy' width={17} height={17} className={Styles.image}/>   
            <Link href="/dashboard/members"><p className={Styles.row_text}>Members</p></Link>
        </div>
        <div className={pathname === "/dashboard/settings" ? Styles.active: Styles.row_wrapper}>
            <Image src='../settings.svg' alt='gameboy' width={17} height={17} className={Styles.image} />   
            <Link href="/dashboard/settings"><p className={Styles.row_text}>Settings</p></Link>
        </div>
        <div >
            <Image src='../logout.svg' alt='gameboy' width={17} height={17} className={Styles.image}/>   
            <p>Games</p>
        </div>
        
    </div>
  )
}

export default Sidebar