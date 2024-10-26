import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { EmailForm } from '@/components/emailForm'

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-6 text-center">
                    <h2 className="text-xl font-semibold mb-4">Ready to transform your fitness? Enter your email to create or restart your membership.</h2>
                    <EmailForm />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start flex-wrap">
                    <div className="flex flex-col items-start mb-6 md:mb-0">
                        <p className="mb-4">Questions? Call +62-822-5712-5486</p>
                        <nav>
                            <ul className="space-y-2">
                                {['FAQ', 'Terms', 'Privacy', 'Security'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase()}`} className="hover:underline text-gray-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex space-x-4">
                        {[
                            { name: 'instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg' },
                            { name: 'twitter', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg' },
                            { name: 'facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg' },
                            { name: 'youtube', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/youtube.svg' }
                        ].map((social) => (
                            <Link key={social.name} href={`https://${social.name}.com`} className="hover:text-gray-300">
                                <span className="sr-only">{social.name}</span>
                                <Image src={social.logo} alt={`${social.name} logo`} width={24} height={24} className="invert" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <p>&copy; 2021 FitPocket</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer