'use client';

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { uamMembers } from '../uam-data';
import { useLanguage } from '@/context/LanguageContext';
import { use } from 'react';

// Client component dynamic page for member profiles
export default function MemberProfile({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { language } = useLanguage();
    const member = uamMembers.find((m) => m.slug === slug);

    if (!member) {
        notFound();
    }

    // Determine content based on language, fallback to 'ro' or 'en'
    const content = member.content[language as keyof typeof member.content] || member.content['ro'] || member.content['en'] || [];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#003d82] p-8 text-center text-white">
                    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
                </div>

                <div className="p-8 md:p-12">
                    <div className="prose max-w-none">
                        {content.length > 0 ? (
                            content.map((block, index) => {
                                if (block.type === 'heading') {
                                    const HeadingTag = `h${block.level || 2}` as keyof React.JSX.IntrinsicElements;
                                    return <HeadingTag key={index} className="text-[#003d82] text-2xl font-bold mt-8 mb-4 border-b border-gray-200 pb-2">{block.text}</HeadingTag>;
                                } else if (block.type === 'list') {
                                    return (
                                        <ul key={index} className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
                                            {block.items?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    );
                                } else {
                                    return <p key={index} className="mb-4 text-gray-700 leading-relaxed text-lg">{block.text}</p>;
                                }
                            })
                        ) : (
                            <p className="text-gray-500 italic text-center">Translation not available for this language.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


