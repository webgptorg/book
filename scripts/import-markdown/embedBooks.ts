/**
 * Embeds book content as HTML img tags with preview URLs
 *
 * Transforms book blocks from:
 * ```book
 * Title
 *
 * Content here
 * ```
 *
 * To:
 * <img alt="Title Book" src="https://promptbook.studio/embed/book-preview.png?book=...&width=800&height=450&nonce=X" />
 *
 * @param content The markdown content that may contain book blocks
 * @returns The content with book blocks replaced by img tags
 */
export function embedBooks(content: string): string {
    // Regular expression to match ```book blocks
    const bookRegex = /```book\s*\n([\s\S]*?)\n```/g;

    return content.replace(bookRegex, (match, bookContent) => {
        // Clean up the book content and extract title
        const lines = bookContent.trim().split('\n');
        const title = lines[0]?.trim() || 'Untitled';

        // Prepare the book content for URL encoding
        // Add pipe separators for line breaks as shown in the example
        const formattedContent = lines
            .map((line: string) => line.trim())
            .filter((line: string) => line.length > 0)
            .join('\n      | ')
            .replace(/\n      \| $/, ''); // Remove trailing empty pipe

        const bookParam = `
      |
      | ${formattedContent}
      |
      `;

        // Generate a simple nonce (could be more sophisticated)
        const nonce = Math.floor(Math.random() * 1000);

        // Create the img tag
        return `<img
    alt="${title} Book"
    src="https://promptbook.studio/embed/book-preview.png?book=${encodeURIComponent(
        bookParam,
    )}&width=800&height=450&nonce=${nonce}"
/>`;
    });
}
