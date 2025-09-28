import React from 'react'
import Link from 'next/link'
import { BreadcrumbItem } from '@/src/interfaces'

interface Props {
    items: BreadcrumbItem[]
}

export const Breadcrumb = ({ items }: Props) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex" aria-label="Breadcrumb">
            {
                items.map(item => (
                    <ol className="flex items-center space-x-4" key={item.title}>
                        {!item.isFinish && (<li>
                            <Link href={item.url} className="text-gray-500 hover:text-gray-700">
                                {item.title}
                            </Link>
                        </li>)}
                        {!item.isFinish && (<li>
                            <span className="text-gray-400 mr-2">/</span>
                        </li>)}
                        {item.isFinish && (<li className="text-gray-900 font-medium">
                            {item.title}
                        </li>)}
                    </ol>
                ))
            }
        </nav>
    </div>
  )
}
