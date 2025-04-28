import { ExternalPathString, Link, RelativePathString } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform, StyleSheet } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: ExternalPathString | RelativePathString | "/"
};

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      style={styles.link}
      target="_blank"
      {...rest}
      href={href ?? "/"}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          event.preventDefault();
          await openBrowserAsync(href);
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  link: {
    textDecorationLine: "underline",
    fontFamily: "ExoSemiBold"
  }
})

