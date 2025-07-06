type AvailableColors = "$primaryColor" | "$secondaryColor" | "$whiteColor" | "$blackColor" | "$backgroundColor" | "$surfaceColor" | "$surfaceColor2" | "$textPrimary" | "$textSecondary" | "$errorColor" | "$errorSecondary" | "$successColor" | "$warningColor" | "$warningSecondary" | "$infoColor" | "$infoSecondary" | "$disabledColor" | "$dividerColor";
type ColorsContainer = { [key in AvailableColors]: string }

export const colors: { [key in string] : ColorsContainer } = {
  light: {
    $primaryColor: '#0097B2',
    $secondaryColor: '#37474F',

    $whiteColor: '#ffffff',
    $blackColor: '#1f2328',

    // Background Colors
    $backgroundColor: '#ffffff',
    $surfaceColor: '#f6f8fa',
    $surfaceColor2: '#f6f8fa',

    // Text Colors
    $textPrimary: '#1f2328',
    $textSecondary: '#59636e',

    $errorColor: '#c50d28',
    $errorSecondary: '#ffe2e0',

    $successColor: '#167e53',

    $warningColor: '#9a6700',
    $warningSecondary: '#fff8c5',
    $infoColor: '#0969da',
    $infoSecondary: '#ddf4ff',

    // Disabled Colors
    $disabledColor: '#eff2f5',
    // Divider Color
    $dividerColor: '#d1d9e0',
  },
  dark: {
    $primaryColor: '#0097B2',
    $secondaryColor: '#37474F',

    $whiteColor: '#fff',
    $blackColor: '#010409',

    // Background Colors
    $backgroundColor: '#0d1117',
    $surfaceColor: '#010409',
    $surfaceColor2: '#151b23',

    // Text Colors
    $textPrimary: '#f0f6fc',
    $textSecondary: '#9198a1',

    $errorColor: '#f27d83',
    $errorSecondary: '#3c0614',

    $successColor: '#14714c',

    $warningColor: '#9e6a03',
    $warningSecondary: '#bb800926',
    $infoColor: '#1f6feb',
    $infoSecondary: '#388bfd1a',

    // Disabled Colors
    $disabledColor: '#212830',
    // Divider Color
    $dividerColor: '#3d444d'
  }
}

export default function (theme: string) {
    return colors[theme];
}