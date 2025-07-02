@echo off
setlocal enabledelayedexpansion

REM 设置你的 Git 操作参数
set COMMIT_MESSAGE="schemaNameShine"

REM 遍历当前文件夹下的所有子文件夹
for /D %%d in (*) do (
    echo Processing %%d...
    cd "%%d"
    
    REM 检查是否是 Git 仓库
    if exist ".git" (
        git add .
        git commit -m %COMMIT_MESSAGE%
        git push
        echo Done: %%d
    ) else (
        echo Not a Git repo: %%d
    )
    
    cd ..
)
pause
