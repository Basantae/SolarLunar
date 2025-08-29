import React from 'react';
import useTheme from '../contexts/theme';

// ThemeBtn component toggles between light and dark themes
export default function ThemeBtn() {
    const { themeMode, lightTheme, darkTheme } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;
        if (darkModeStatus) {
            darkTheme();
        } else {
            lightTheme();
        }
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full peer-focus:ring-4 peer-focus:ring-blue-400 dark:peer-focus:ring-blue-800 transition-colors duration-300 relative">
                <span className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full transition-transform duration-300 peer-checked:translate-x-6 flex items-center justify-center text-yellow-400 dark:text-blue-400">
                    {themeMode === "dark" ? (
                        // Moon icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                        </svg>
                    ) : (
                        // Sun icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" />
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </svg>
                    )}
                </span>
            </div>
            <span className="ml-4 text-base font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
        </label>
    );
}