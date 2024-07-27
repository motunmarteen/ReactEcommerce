export function heroTextAnimation() {
    const spanElement = document.querySelector(".hero-text-span") as HTMLElement | null;
    if (spanElement) {
        const wordsAttr = spanElement.getAttribute("data-words");
        if (!wordsAttr) {
            console.error("No data-words attribute found.");
            return;
        }

        const words = wordsAttr.split(", ");
        if (words.length === 0) {
            console.error("No words found in data-words attribute.");
            return;
        }

        let wordIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            const currentLength = spanElement.textContent?.length || 0;

            if (isDeleting) {
                spanElement.textContent = currentWord.substring(0, currentLength - 1);
            } else {
                spanElement.textContent = currentWord.substring(0, currentLength + 1);
            }

            if (!isDeleting && currentLength === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause before deleting
            } else if (isDeleting && currentLength === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Pause before typing the next word
            } else {
                setTimeout(type, isDeleting ? 100 : 200); // Adjust speed for typing and deleting
            }
        }

        type();
    } else {
        console.error("Element with class 'hero-text-span' not found.");
    }
}