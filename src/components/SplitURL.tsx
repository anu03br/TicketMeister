export default function SplitURL(url: string): string {
    return  url.split("/venue/")[1].split("-tickets")[0];
}