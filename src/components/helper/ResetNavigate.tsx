import { Href, router } from "expo-router";

export const ResetAndNavigate = (newPath: Href) => {
    if (router.canGoBack()) {
        router.dismissAll();
    }
    router.replace(newPath);
}

