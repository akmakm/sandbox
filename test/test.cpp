// (c) 2020 Aleksandr Kartomin

#include <iostream>
#include <string>
using namespace std;

#include "interval_map.cpp"

void IntervalMapTest()
{
    interval_map <string, string> dic("alka");

    std::cout << "#######     0" << std::endl;
    std::cout << "aaa=====> " << dic["aaa"] << std::endl;
    std::cout << "zzz=====> " << dic["zzz"] << std::endl;

    std::cout << "#######     1" << std::endl;
    //dic.insert_or_assign(std::string("abc"), std::string("def"));
    dic.assign(std::string("abd-do belki"), std::string("abe-posle belki"),
        std::string("belka"));


    std::cout << "#######     2" << std::endl;
    std::cout << "aaa=====> " << dic["aaa"] << std::endl;
    for (auto it = dic.begin(); it != dic.end(); ++it) {
        std::cout << it->first << ", " << it->second << '\n';
    }
    std::cout << "zzz=====> " << dic["zzz"] << std::endl;
    dic.assign(std::string("abb-do belki"), std::string("abe-posle belki"),
        std::string("dolka"));
    std::cout << "aaa=====> " << dic["aaa"] << std::endl;
    for (auto it = dic.begin(); it != dic.end(); ++it) {
        std::cout << it->first << ", " << it->second << '\n';
    }
    std::cout << "zzz=====> " << dic["zzz"] << std::endl;

    std::cout << "#######     3" << std::endl;
    dic.insert_or_assign(std::string("abc"), std::string("def"));
//    dic.assign(std::string("abc"), std::string("abe"),
        dic.assign(std::string("abcd"), std::string("abe-posle belki2"),
        std::string("alka"));

    std::cout << "#######     4" << std::endl;
    std::cout << "aaa=====> " << dic["aaa"] << std::endl;
    for (const auto& p : dic) {
        std::cout << p.first << " => " << p.second << '\n';
    }
    std::cout << "zzz=====> " << dic["zzz"] << std::endl;
}

int main()
{
    std::cout << "Hello World!\n";
    IntervalMapTest();
    std::cout << "Bye World!\n";
}