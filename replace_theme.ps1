$files = Get-ChildItem -Recurse src -Filter *.tsx

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Replace colors
    $content = $content -replace 'text-gradient-gold', 'text-gradient-purple'
    $content = $content -replace 'bg-gradient-gold', 'bg-gradient-purple'
    $content = $content -replace 'text-gold-main', 'text-purple-main'
    $content = $content -replace 'border-gold-main', 'border-purple-main'
    $content = $content -replace 'bg-gold-main', 'bg-purple-main'
    $content = $content -replace 'ring-gold-main', 'ring-purple-main'
    $content = $content -replace 'gold-light', 'purple-light'
    $content = $content -replace 'gold-dark', 'purple-dark'
    
    # Replace background utility classes that use the old slate colors
    $content = $content -replace 'bg-\[#0f172a\]', 'bg-[#170f2a]'
    $content = $content -replace 'bg-\[#1e293b\]', 'bg-[#2e1065]'
    $content = $content -replace 'bg-\[#020617\]', 'bg-[#030014]'
    
    # Replace specific glows that were blue/gold to purple/neon
    $content = $content -replace 'bg-blue-900/10', 'bg-purple-800/10'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Theme classes replaced successfully."
