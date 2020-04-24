#!/bin/bash

choice=(A B "C" D)
printf "%-6s %-6s %-6s %-6s\n" 选择一 选择二 选择三 选择四
printf "%-6s %-6s %-6s %-6s\n" ${choice[0]} ${choice[1]} ${choice[2]} ${choice[3]}

echo '请选择药丸，选择输入 blue 或 red'
echo '请输入:'
read pill
case $pill in
    blue)  echo '你选择了 蓝色药丸'
    ;;
    red)  echo '你选择了 红色药丸'
    ;;
    *)  echo '你没有选择药丸，你完蛋了！'
    ;;
esac
