import Image from 'next/image';

export function Logo() {
    return (
        <div className="flex items-center">
            <Image src="/fp_logo.png" alt="FITPOCKET" width={160} height={160} />
        </div>
    );
}