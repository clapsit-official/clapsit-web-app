type AvailableColors = "$primaryColor" | "$secondaryColor" | "$whiteColor" | "$blackColor" | "$backgroundColor" | "$surfaceColor" | "$surfaceColor2" | "$textPrimary" | "$textSecondary" | "$errorColor" | "$errorSecondary" | "$successColor" | "$warningColor" | "$warningSecondary" | "$infoColor" | "$disabledColor" | "$dividerColor" | "$shadowColor";
type ColorsContainer = { [key in AvailableColors]: string }

export const LightThemeColors: ColorsContainer = {
  $primaryColor: '#0097b2',
  $secondaryColor: '#37474F',
  
  $whiteColor: '#ffffff',
  $blackColor: '#000000',
  
  // Background Colors
  $backgroundColor: '#ffffff',
  $surfaceColor: '#fafafa',
  $surfaceColor2: '#fafafa',
  
  // Text Colors
  $textPrimary: '#000000',
  $textSecondary: '#5d5d5d',
  
  $errorColor: '#c62323',
  $errorSecondary: '#F3ECEC',
  
  $successColor: '#1aa11d',
  
  $warningColor: '#f9a700',
  $warningSecondary: '#F5F1EA',
  $infoColor: '#0658ff',
  
  // Disabled Colors
  $disabledColor: '#cccccc',
  // Divider Color
  $dividerColor: '#5d5d5d',
  // Shadows
  $shadowColor: '#ffffff',
};

export const DarkThemeColors: ColorsContainer = {
  $primaryColor: '#0097b2',
  $secondaryColor: '#37474F',
  
  $whiteColor: '#ffffff',
  $blackColor: '#111113',
  
  // Background Colors
  $backgroundColor: '#111113',
  $surfaceColor: '#1E1E1E',
  $surfaceColor2: '#2E3033',
  
  // Text Colors
  $textPrimary: '#ffffff',
  $textSecondary: '#ddd',
  
  $errorColor: '#c62323',
  $errorSecondary: '#632929',
  
  $successColor: '#1aa11d',
  
  $warningColor: '#f9a700',
  $warningSecondary: '#a27323',
  $infoColor: '#0658ff',
  
  // Disabled Colors
  $disabledColor: '#cccccc',
  // Divider Color
  $dividerColor: '#ddd',
  // Shadows
  $shadowColor: '#ffffff',
};

export default DarkThemeColors as ColorsContainer;